module ApplicationHelper
  def resolve_layout
    return "react_#{action_name}" if controller_name == "react"

    "application"
  end
end
