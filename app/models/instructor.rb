class Instructor < ActiveRecord::Base
    has_secure_password
    has_many :courses
end