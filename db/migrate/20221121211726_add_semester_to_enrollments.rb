class AddSemesterToEnrollments < ActiveRecord::Migration[7.0]
  def change
    add_column :enrollments, :semester, :string, default:"Fall"
  end
end
