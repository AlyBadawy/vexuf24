class StaticController < ApplicationController
  def home
  end

  def about
  end

  def contact
  end

  def cookies
  end

  def tos
  end

  def privacy
  end

  def cookies_banner
    session[:cookies_accepted] = params[:cookies_accepted] if params[:cookies_accepted]
    render layout: false
  end
end
