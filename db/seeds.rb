require "json"

# Create default rules for the application
# Define the roles
roles = JSON.parse(File.read(File.join(File.dirname(__FILE__), "seeds/roles.json")))

# Iterate over the roles
roles.each do |role|
  role = Role.find_or_create_by(name: role)
  user = Account.create(email: "#{role.name}@example.com", password: "password")
  user.roles << role
end
