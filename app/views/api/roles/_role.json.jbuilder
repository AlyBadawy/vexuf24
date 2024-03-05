# app/views/api/accounts/_account.json.jbuilder

json.extract! role, :id, :name
json.url api_role_url(role, format: :json)
