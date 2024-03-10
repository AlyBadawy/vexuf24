require "rails_helper"

RSpec.describe "react/app.html.erb" do
  it "renders the page" do
    render
    expect(rendered).to match('<div id="react-app-root" />')
  end
end
