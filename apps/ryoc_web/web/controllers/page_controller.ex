defmodule RyocWeb.PageController do
  use RyocWeb.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
