# app/views/api/accounts/_account.json.jbuilder

json.extract! role, :id, :name, :icon, :position
json.url api_role_url(role, format: :json)
