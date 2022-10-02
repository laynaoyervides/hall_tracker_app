puts "🌱 Seeding spices..."

# Seed your database here

mso = Instructor.create (
    {
        name: "Ms. Oreo"
    }
)

mrs = Instructor.create (
    {
        name: "Mr. Snickers"
    }
)

msg = Instructor.create(
    {
        name: "Ms. Goodbar"
    }
)

mrp = Instructor.create (
    {
        name: "Mr. Payday"
    }
)
msk = Instructor.create (
    {
    name: "Ms. KitKat" 
}
    )
mrr = Instructor.create (
    {
        name: "Mr. Reeses"
    }
)

art1 = Course.create (
    { 
        course_name: "Art_1",
        class_period:1
        }
)
art2 = Course.create ( {
    course_name: "Art_2",
    class_period:2
    })
art3=Course.create(
       
        {
        course_name: "Art_3" ,
        class_period:3
        }
)
  
art4=Course.create(
        {
        course_name: "Art_4",
        class_period:4
        }
)
art5=Course.create(

        {

        course_name: "Art_5",
        class_period:5
        }
)
art6=Course.create(
        {
        course_name: "Art_6",
        class_period:6
        }
        )
mso.courses << [art1,art2, art3, art4, art5, art6]

cs1 = Course.create (
    {
        course_name: "ComputerScience_1",
        class_period: 1
        }
)

cs2 = Course.create (
        {
        course_name: "ComputerScience_2",
        class_period:2

        }
)

cs3 = Course.create (
        {
        course_name: "ComputerScience_3",
        class_period:3
        }
)

cs4 = Course.create (
        {

        course_name: "ComputerScience_4",
        class_period:4
        }
)

cs5 = Course.create (
        {

        course_name: "ComputerScience_5",
        class_period:5
        
        }
)

cs6 = Course.create (
        {
        course_name: "ComputerScience_6",
        class_period:6
        }
)
mrs.courses << [cs1, cs2, cs3, cs4, cs5, cs6]

sci1 = Course.create (
    { 
        course_name: "Science_1",
        class_period:1
        }
)
sci2 = Course.create (

        {
        course_name: "Science_2",
        class_period:2

        }
)
sci3 = Course.create (

        {
        course_name: "Science_3",
        class_period:3
        }
)
sci4 = Course.create (

        {

        course_name: "Science_4",
        class_period:4
        }
)
sci5 = Course.create (

        {

        course_name: "Science_5",
        class_period:5
        }
)
sci6 = Course.create (

        {
        course_name: "Science_6",
        class_period:6
        }
)
msg.courses << [sci1, sci2, sci3, sci4, sci5, sci6]

math1 = Course.create (
    { 
        course_name: "Math_1",
        class_period:1
    }
)
math2=Course.create (
        {
        course_name: "Math_2",
        class_period:2

        }
    )
math3=Course.create (
        {
        course_name: "Math_3",
        class_period:3
        }
)
math4=Course.create (
        {

        course_name: "Math_4",
        class_period:4
        }
)
math5=Course.create (
        {

        course_name: "Math_5",
        class_period:5
        }
)
math6=Course.create (
        {
        course_name: "Math_6",
        class_period:6
        }
)
mrp.courses << [math1, math2, math3, math4, math5, math6]

ela1 = Course.create (
    { 
        course_name: "ELA_1",
        class_period:1
        }
)
ela2 = Course.create (
        {
        course_name: "ELA_2",
        class_period:2

        }
)
ela3 = Course.create (
        {
        course_name: "ELA_3",
        class_period:3
        }
)
ela4 = Course.create (
        {
        course_name: "ELA_4",
        class_period:4
        }
)
ela5 = Course.create (
        {
        course_name: "ELA_5",
        class_period:5
        }
)
ela6 = Course.create (
        {
        course_name: "ELA_6",
        class_period:6
        }
)
msk.courses << [ela1, ela2, ela3, ela4, ela5, ela6] 

his1= Course.create (
    { 
        course_name: "HIST_1",
        class_period:1
        }
)
his2 = Course.create(
        {
        course_name: "HIST_2",
        class_period:2

        }
)
his3 =Course.create (
        {
        course_name: "HIST_3",
        class_period:3
        }
)
his4 = Course.create (
        {

        course_name: "HIST_4",
        class_period:4
        }
)
his5 = Course.create (
        {

        course_name: "HIST_5",
        class_period:5
        }
)
his6 = Course.create (
        {
        course_name: "HIST_6",
        class_period:6
        }
)
mrr.courses << [his1, his2, his3, his4, his5, his6]
ai = Learner.create ({
    name: "Anikin Indy"
})  
ai.courses << [art1, cs2, sci3, math4, ela5, his6]

ad = Learner.create ({
     name:"Asterix Draven"
})   
ad.courses << [art1, cs2, sci3, math4, ela5, his6]

bt =Learner.create ({
     name:"Beetlejuice T'Challa" 
}) 
bt.courses << [art1, cs2, sci3, math4, ela5, his6]

mw=Learner.create ({
    name:"Morticia Wednesday"
})
mw.courses << [art1, cs2, sci3, math4, ela5, his6] 

ls=Learner.create ({
     name:"Leia Spock"
}) 
ls.courses << [art1, cs2, sci3, math4, ela5, his6]

nv=Learner.create ({
     name:"Nala Vesper"
})
nv.courses << [his1, art2, cs3, sci4, math5, ela6]


mp=Learner.create ({
      name:"Mazikeen Popeye"
}) 
mp.courses << [his1, art2, cs3, sci4, math5, ela6]


bk=Learner.create ({
     name:"Beavis Kratos" 
}) 
bk.courses << [his1, art2, cs3, sci4, math5, ela6]


gc=Learner.create ({
     name:"Gojira Castiel" 
}) 
gc.courses << [his1, art2, cs3, sci4, math5, ela6]


ef=Learner.create ({
     name:"Elora Frankenstein" 
}) 
ef.courses << [his1, art2, cs3, sci4, math5, ela6]


ak=Learner.create ({
      name:"Aang Kal-El" 
}) 
ak.courses << [ela1, his2, art3, cs4, sci5, math6]

kk=Learner.create ({
   name:"Kal Kilo"  
}) 
kk.courses << [ela1, his2, art3, cs4, sci5, math6]

zm=Learner.create ({
     name:"Zorro Morron"
}
)
zm.courses << [ela1, his2, art3, cs4, sci5, math6]

xs=Learner.create ({
    name:"Xena Sonic"
}) 
xs.courses << [ela1, his2, art3, cs4, sci5, math6]

cm=Learner.create ({
     name:"Castiel Merida" 
})
cm.courses << [ela1, his2, art3, cs4, sci5, math6]

le=Learner.create ({
     name:"Linet Ebeneezer"
}) 
le.courses << [math1, ela2, his3, art4, cs5, sci6]

on=Learner.create ({
     name:"Ophelia Norma"
})
on.courses << [math1, ela2, his3, art4, cs5, sci6]

fl=Learner.create ({
     name:"Figaro Lionel"
})
fl.courses << [math1, ela2, his3, art4, cs5, sci6]

ee=Learner.create ({
    name:"Elmira Eowyn"
})
ee.courses << [math1, ela2, his3, art4, cs5, sci6]

ce=Learner.create ({
    name:"Cymbeline Enide"
})
ce.courses << [math1, ela2, his3, art4, cs5, sci6]

ag=Learner.create ({
     name:"Alladin Galadriel"
}) 
ag.courses << [sci1, math2, ela3, his4, art5, cs6]


rr=Learner.create ({
     name:"Renesmee Bors"
})
rr.courses << [sci1, math2, ela3, his4, art5, cs6]

iv=Learner.create ({
     name:"Iseut Vivien"
})
iv.courses << [sci1, math2, ela3, his4, art5, cs6]

cc=Learner.create ({
     name:"Caradog Calfia"
})
cc.courses << [sci1, math2, ela3, his4, art5, cs6]


lh=Learner.create ({
     name:"Lalla Haidee"
})
lh.courses << [sci1, math2, ela3, his4, art5, cs6]

bc=Learner.create ({
     name:"Bayard Criseyde"
})    
bc.courses << [cs1, sci2, math3, ela4, his5, art6]

oa=Learner.create ({
     name:"Olindo Ayla"
}) 
oa.courses << [cs1, sci2, math3, ela4, his5, art6]

lt=Learner.create ({
     name:"Lancelot Tinuviel"
})
lt.courses << [cs1, sci2, math3, ela4, his5, art6]

ul=Learner.create ({
    name:"Urien Lear"
})
ul.courses << [cs1, sci2, math3, ela4, his5, art6]

ec=Learner.create ({
    name:"Eponine Cordeilla"
    
})
ec.courses << [cs1, sci2, math3, ela4, his5, art6]



puts "✅ Done seeding!"
Footer
