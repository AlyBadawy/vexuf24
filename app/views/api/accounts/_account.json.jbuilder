json.extract! account, :id, :email, :first_name, :last_name
json.roles account.roles, partial: "api/roles/role", as: :role
json.url api_account_url(account, format: :json)
