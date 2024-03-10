module ApplicationHelper
  def resolve_layout
    return "react_#{action_name}" if controller_name == "react"

    "application"
  end

  def flippers_json(user)
    JSON.generate(
      Flipper.features.to_h do |feature|
        if user
          [feature.name, feature.enabled?(user)]
        else
          [feature.name, feature.enabled?]
        end
      end,
    )
  end

  def git_revision
    production_dir = "../../repo"
    message = ""
    if Rails.env.production?
      git_revision = Dir.chdir(production_dir) { `git rev-parse HEAD`.strip }
      git_tag = Dir.chdir(production_dir) { `git describe --tags --abbrev=0 --always`.strip }
    else
      git_revision = `git rev-parse HEAD`.strip
      git_tag = `git describe --tags --abbrev=0 --always`.strip
    end
    if git_tag.present?
      git_tag.gsub!(/^v/, "")
      message = "Version: #{git_tag} - Revision: #{git_revision[0..6]}"
    else
      message = "Revision: #{git_revision[0..6]}"
    end
    { revision: git_revision, tag: git_tag, message: message }.to_json
  end
end
