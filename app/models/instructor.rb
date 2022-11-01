class Instructor < ActiveRecord::Base
    has_many :courses

    has_secure_password

    validates :username, presence: true, uniqueness: true
    validates :email, uniqueness: true, allow_blank: false
    
end