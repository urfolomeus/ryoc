# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# Configures the endpoint
config :ryoc_web, RyocWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "YdwBI5uewnks6uS67TG37R15dU92rczDpCowj6u+rkjPGrHuQos7xOtQ3Sz8quIg",
  render_errors: [view: RyocWeb.ErrorView, accepts: ~w(html json)],
  pubsub: [name: RyocWeb.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
