class Instructor < ActiveRecord::Base
    has_many :courses

    has_secure_password
    #we get this method from the bcrypt gemlibrary 
    #bcrypt uses this method to take the password parameter's contents and store the in a table called 'password_digest', which
    #we have already set up in the model
    #it will encrypt our password by making it into a hash, salting it, and then storing it

    #we can also use password_confirmation - 
    #we can also use authenticate -

    validates :username, presence: true, uniqueness: true
    validates :email, uniqueness: true, allow_blank: false
    #These validations run when we try to write to the database. If an entry is valid, it will be written
    #if an entry is not valid, an exception will be raised or the database will not be changed
    
end