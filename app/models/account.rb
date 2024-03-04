class Account < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable,
         :confirmable, :lockable, :timeoutable, :trackable

  has_and_belongs_to_many :roles # rubocop:disable Rails/HasAndBelongsToMany

  has_paper_trail

  def role?(role)
    roles.any? { |r| r.name.underscore.to_sym == role }
  end
end
