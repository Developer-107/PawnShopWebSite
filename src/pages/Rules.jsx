import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Rules() {

const { pathname, hash } = useLocation();
const navigate = useNavigate();
useEffect(() => {
  if (hash) {
    const element = document.querySelector(hash);
    if (element) {
      const topPos = element.getBoundingClientRect().top + window.pageYOffset - 80; // navbar offset
      window.scrollTo({ top: topPos, behavior: "smooth" });
    }
  }
}, [pathname, hash]);




  
  return (
    <>



    <div id='rules' className="flex justify-center whiteWholeBG ">
    <div className="mt-[1rem]  contentContainer">
      
    <div className="flex rulesContainer">
        <div className="rulesTitleContainer">
      <h1 className="rulesTitle">პირობები</h1>
      <h2 className="rulesSubtitle">მარტივი პირობები, მეტი შესაძლებლობები</h2>
      <button onClick={() => navigate("/contact")} className="button">დაგვიკავშირდი</button>  

        </div>
    </div>
      


<br/>
<br/>

<h2 id="advantages" className="mt-7">უპირატესობები</h2>
<br/>

<h3 id="pricing">უმაღლესი შეფასება</h3>
<p>
ტექნიკის სახლი Cash EE სარგებლობს მომხმარებლების ნდობითა და მაღალი შეფასებებით. 
ჩვენი სერვისები გამჭვირვალე, სანდო და ყველასთვის ხელმისაწვდომია.
</p>
<br/>
<br/>


<h3 id="wOutFine">გადახდა ჯარიმის გარეშე</h3>
<p>
ჩვენთან გადახდა არის მარტივი და კომფორტული — დაგვიანების შემთხვევაში 
არ დაგეკისრებათ ჯარიმები. 
ჩვენ გვჯერა მოქნილი პირობების, რომელიც მომხმარებლის ინტერესებზეა მორგებული.
</p>
<br/>
<br/>


<h3 id="freeSchedule">თავისუფალი გადახდის გრაფიკი</h3>
<p>
„ტექნიკის სახლი Cash EE“ გაძლევს თავისუფლებას, აირჩიო როგორ და 
  როდის დაფარავ შენს ვალდებულებებს. 
</p>
<br/>
<br/>

 
<h2 id="services" className="mt-7">მომსახურებები</h2>
<br/>

<h3 id="pawningIcloud">აიქლაუდის დატოვება</h3>
<p>
„ტექნიკის სახლი Cash EE“ გთავაზობთ აიქლაუდის დატოვების მომსახურებას. 
თქვენ იღებთ საჭირო თანხას წინასწარ, ხოლო iCloud რჩება ჩვენს უსაფრთხო სისტემაში.
</p>
<br/>
<br/>

<h3 id="pawningItem">ნივთის დატოვება</h3>
<p>
„ტექნიკის სახლი Cash EE“-ში შეგიძლიათ დატოვოთ ტელეფონი, ლეპტოპი, ტელევიზორი, 
  პლანშეტი, ფლეისთეიშენი , მონიტორი და სხვა საყოფაცხოვრებო ნივთები მაგ: სარეცხის მანქანა, 
  მაცივარი, გაზქურა და ა.შ. „ტექნიკის სახლი Cash EE“ უზრუნველყოფს ნივთის უსაფრთხო შენახვას, 
  თქვენ იღებთ თანხას წინასწარ, და დაფარვის შემდეგ ნივთი ბრუნდება თქვენთან.
</p>
<br/>
<br/>

<h3 id="sellingItem">ნივთის გაყიდვა</h3>
<p>
გთავაზობთ ტექნიკის სწრაფი რეალიზაციის შესაძლებლობას. 
გაყიდეთ თქვენთვის არასაჭირო ნივთი და მიიღეთ თანხა მყისიერად.
</p>
<br/>
<br/>

<h3 id="buyingItem">ნივთის ყიდვა</h3>
<p>
„ტექნიკის სახლი Cash EE“-ში ხელმისაწვდომია სხვადასხვა სახეობის ტექნიკა. 
მიიღეთ სანდო გარანტიები და ისარგებლეთ გამარტივებული შეძენის პირობებით.
</p>


    

    </div>
    </div>

  </>

  );}
 
