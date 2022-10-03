class AddInstructorIdToCourses < ActiveRecord::Migration[7.0]
  def change
    add_column :courses, :instructor_id, :integer
  end
end
