class AddCreateOrders < ActiveRecord::Migration[7.2]
  def change
    create_table :orders do |t|
    	t.text :orders_input
    	t.text :name
    	t.text :phone
    	t.text :adress
    	t.timestamps
    end
  end
end
