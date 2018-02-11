class AddAbilityToPokemons < ActiveRecord::Migration[5.1]
  def change
    add_column :pokemons, :ability, :string
  end
end
