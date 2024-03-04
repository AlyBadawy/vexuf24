# rubocop:disable Rails/InverseOf

class Topic < ApplicationRecord
  has_many :child_topics, # rubocop:disable Rails/InverseOf
           class_name: "Topic",
           foreign_key: "parent_id",
           dependent: :destroy

  belongs_to :parent_topic,
             class_name: "Topic",
             optional: true,
             foreign_key: "parent_id"

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

# rubocop:enable Rails/InverseOf
