module ApplicationHelper
  def webpack_script_for(bundle)
    path = Rails.root.join('frontend', 'webpack-assets.json')
    file = File.read(path)
    json = JSON.parse(file)
    content_tag(:script, "", {src: json[bundle]['js']})
  end
end
