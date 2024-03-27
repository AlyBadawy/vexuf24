require "json"

Rails.logger = Logger.new($stdout)
Rails.logger.level = Logger::INFO

# Create default rules for the application
# Define the roles
roles = JSON.parse(File.read(File.join(File.dirname(__FILE__), "seeds/roles.json")))

# Iterate over the roles
roles.each do |r|
  role = Role.find_or_create_by(name: r["name"], position: r["position"])
  user = Account.create(email: "#{role.name}@example.com", password: "password", confirmed_at: Time.zone.now, first_name: role.name, last_name: "User")
  user.roles << role
end

topics = JSON.parse(File.read(File.join(File.dirname(__FILE__), "seeds/topics.json")))

def create_topics(name, children, parent_id = nil)
  topic = Topic.find_or_create_by(name: name, parent_id: parent_id)
  Rails.logger.info "Creating topic: #{topic.name} with full path: #{topic.full_path}"

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
doctor_account = Account.find_by(email: "doctor@example.com")

# Create 2 Care sessions
2.times do |i|
  session = CareSession.create(
    session_datetime: DateTime.now + i.days,
    patient: patient_account,
    care_giver: doctor_account,
  )

  # Create 3 notes for each session
  3.times do |j|
    note = Note.create(
      content: { text: "Note #{j + 1} for Therapy Session #{i + 1}", position: j + 1 },
      care_session: session,
    )

    # Assign a topic to each note
    note.topics << random_leaf_topics
  end
end
