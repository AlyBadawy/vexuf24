# frozen_string_literal: true

Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins "*"
    resource "*",
             headers: %w(Authorization Content-Type X-Requested-With X-Prototype-Version X-CSRF-Token X-File-Name X-File-Size X-File-Type Accept JWT-AUD X-CSRF-Token),
             methods: :any,
             expose: %w(Authorization Content-Type X-Requested-With X-Prototype-Version X-CSRF-Token X-File-Name X-File-Size X-File-Type Accept X-CSRF-Token),
             max_age: 600
  end
end
