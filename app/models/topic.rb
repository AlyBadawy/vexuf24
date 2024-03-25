class Topic < ApplicationRecord
  has_many :child_topics,
           class_name: "Topic",
           foreign_key: "parent_id",
           dependent: :destroy,
           inverse_of: :parent_topic

  belongs_to :parent_topic,
             class_name: "Topic",
             optional: true,
             foreign_key: "parent_id",
             inverse_of: :child_topics

  has_many :notes_topics, dependent: :destroy
  has_many :notes, through: :notes_topics

  def self.tree
    roots = where(parent_id: nil)
    roots.map(&:child_tree)
  end

  def child_tree
    {
      name: name,
      children: child_topics.map(&:child_tree),
    }
  end

  def full_path
    parent_topic ? "#{parent_topic.full_path} -> #{name}" : name
  end
end
