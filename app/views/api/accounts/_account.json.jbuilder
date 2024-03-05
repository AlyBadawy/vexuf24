json.extract! account, :id, :email
json.roles account.roles, partial: "api/roles/role", as: :role
json.url api_account_url(account, format: :json)
