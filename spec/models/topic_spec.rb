require "rails_helper"

RSpec.describe Topic do
  describe "associations" do
    it { is_expected.to belong_to(:parent_topic).class_name("Topic").optional }
    it { is_expected.to have_many(:notes_topics) }
    it { is_expected.to have_many(:notes).through(:notes_topics) }
  end

  describe ".tree" do
    it "returns a nested hash of topics" do
      # Setup some topics and child topics
      parent_topic = create(:topic)
      child_topic = create(:topic, parent_topic: parent_topic)

      expect(described_class.tree).to eq([
        {
          name: parent_topic.name,
          children: [
            {
              name: child_topic.name,
              children: [],
            },
          ],
        },
      ])
    end
  end

  describe "#child_tree" do
    it "returns a hash of the topic and its child topics" do
      # Setup a topic and child topic
      topic = create(:topic)
      child_topic = create(:topic, parent_topic: topic)

      expect(topic.child_tree).to eq({
        name: topic.name,
        children: [
          {
            name: child_topic.name,
            children: [],
          },
        ],
      })
    end
  end

  describe "#full_path" do
    it "returns the full path of the topic" do
      # Setup a topic and child topic
      topic = create(:topic, name: "Parent")
      child_topic = create(:topic, name: "Child", parent_topic: topic)

      expect(child_topic.full_path).to eq("Parent -> Child")
    end
  end
end
