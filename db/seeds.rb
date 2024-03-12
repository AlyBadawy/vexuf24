require "json"

# Create default rules for the application
# Define the roles
roles = JSON.parse(File.read(File.join(File.dirname(__FILE__), "seeds/roles.json")))

# Iterate over the roles
roles.each do |role|
  role = Role.find_or_create_by(name: role)
  user = Account.create(email: "#{role.name}@example.com", password: "password", confirmed_at: Time.zone.now, first_name: role.name, last_name: "User")
  user.roles << role
end

topics = JSON.parse(File.read(File.join(File.dirname(__FILE__), "seeds/topics.json")))

def create_topics(name, children, parent_id = nil)
  topic = Topic.find_or_create_by(name: name, parent_id: parent_id)
  puts "Creating topic: #{topic.name} with full path: #{topic.full_path}" # rubocop:disable Rails/Output

  if children.is_a? Array
    children.each do |child_name|
      create_topics(child_name, [], topic.id)
    end
  elsif children.is_a? Hash
    children.each do |child_name, grand_children|
      create_topics(child_name, grand_children, topic.id)
    end
  end
end

# Iterate over the topics and create them
topics.each do |name, children|
  create_topics(name, children)
end

def random_leaf_topics
  leaf_topics = Topic.includes(:child_topics).where(child_topics: { id: nil })
  leaf_topics.sample(3)
end

# Fetch the patient and therapist accounts
patient_account = Account.find_by(email: "patient@example.com")
therapist_account = Account.find_by(email: "therapist@example.com")

# Create 2 therapy sessions
2.times do |i|
  session = TherapySession.create(
    session_datetime: DateTime.now + i.days,
    patient: patient_account,
    therapist: therapist_account,
  )

  # Create 3 notes for each session
  3.times do |j|
    note = Note.create(
      content: "Note #{j + 1} for Therapy Session #{i + 1}",
      therapy_session: session,
    )

    # Assign a topic to each note
    note.topics << random_leaf_topics
  end
end
