# frozen_string_literal: true

class CanAccessFlipperUI
  def self.matches?(request)
    current_admin_user = request.env["warden"].user
    current_admin_user&.role?("admin")
  end
end
