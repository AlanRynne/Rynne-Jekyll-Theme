# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "rynne-jekyll-theme"
  spec.version       = "0.1.0"
  spec.authors       = ["Alan Rynne"]
  spec.email         = ["alan@rynne.es"]

  spec.summary       = "AlanRynne First Jekyll Theme"
  spec.homepage      = "http://rynne.es"
  spec.license       = "MIT"

  spec.files = `git ls-files -z`.split("\x0").select do |f|
    f.match(%r{^(_(includes|layouts|sass)/|(LICENSE|README)((\.(txt|md|markdown)|$)))}i)
  end
  
  spec.add_runtime_dependency "jekyll", "~> 3.8"

  spec.add_development_dependency "bundler", "~> 1.16"
  spec.add_development_dependency "rake", "~> 12.0"
  spec.add_development_dependency "bulma-rails", "~> 0.7.2"
end
