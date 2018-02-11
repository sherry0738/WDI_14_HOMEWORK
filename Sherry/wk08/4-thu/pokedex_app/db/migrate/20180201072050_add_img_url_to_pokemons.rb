class AddImgUrlToPokemons < ActiveRecord::Migration[5.1]
  def change
    add_column :pokemons, :img_url, :string
  end
end
