json.extract! topic, :id, :name, :full_path
json.children topic.child_topics, partial: "topic", as: :topic
json.url api_topic_url(topic, format: :json)
