class CreateTables < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :username
      t.string :p_hash
    end
    create_table :statistics do |t|
      t.references :user
      t.integer :level
      t.integer :time
    end
  end
end
