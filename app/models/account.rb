class Account < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable,
         :confirmable, :lockable, :timeoutable, :trackable

  has_many :account_roles, dependent: :destroy
  has_many :roles, through: :account_roles

  has_many :patient_sessions, class_name: "TherapySession", foreign_key: "patient_id", dependent: :destroy, inverse_of: :patient
  has_many :therapist_sessions, class_name: "TherapySession", foreign_key: "therapist_id", dependent: :nullify, inverse_of: :therapist

  has_paper_trail

  def role?(role)
    roles.any? { |r| r.name.underscore.to_sym == role.underscore.to_sym }
  end
end
