import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function About() {


  const { pathname, hash } = useLocation();
  const [isVacanciesOpen, setIsVacanciesOpen] = useState(false);

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
    <div id='about' className="flex justify-center whiteWholeBG ">
    <div className="mt-[5rem]  contentContainer">
    
    <h1 id="aboutUs">ჩვენ შესახებ</h1>
<br/>
<br/>

<h2 id="whoWeAre">ვინ ვართ ჩვენ</h2>
<p>
ტექნიკის სახლი Cash EE არის წამყვანი ტექნიკის მაღაზია საქართველოში, რომელიც მომხმარებელს სთავაზობს მაღალი ხარისხის ტექნიკას <br/>
ყველა კატეგორიაში. ჩვენი გუნდი გამოირჩევა პროფესიონალიზმით, ცოდნითა და კეთილგანწყობილობით, რათა თითოეულ მომხმარებელს <br/>
მიაწოდოს საუკეთესო სერვისი და პროდუქტი.
</p>
<br/>
<br/>


<h2 id="ourMission">ჩვენი მისია</h2>
<p>
ჩვენი მიზანია ტექნიკის შეძენა გახდეს მარტივი, სწრაფი და უსაფრთხო. ჩვენ ვცდილობთ მუდმივად განვავითაროთ ჩვენი პროდუქტის <br/>
საბაზრო შეთავაზება და სერვისები, რომ შევქმნათ მომხმარებლისთვის კომფორტული და სასიამოვნო გამოცდილება.<br/>
</p>
<br/>
<br/>


<h2 id="ourPriorities">ჩვენი პრიორიტეტები</h2>
<p>
ჩვენი ძირითადი პრიორიტეტებია მომხმარებლის კმაყოფილება, პროდუქტის ხარისხი, გამჭვირვალე მომსახურება და ინოვაციური <br/>
შეთავაზებები. ჩვენ ვეძებთ საუკეთესო გადაწყვეტილებებს, რათა ჩვენს მომხმარებელს მივაწოდოთ თანამედროვე ტექნიკა
საუკეთესო პირობებით.
</p>
<br/>
<br/>


<h2 id="ourExperience">ჩვენი გამოცდილება</h2>
<p>
ტექნიკის სახლი Cash EE მუშაობს საქართველოს ბაზარზე წლების განმავლობაში, რაც საშუალებას გვაძლევს გავიცნოთ მომხმარებლის <br/>
საჭიროებები და შევთავაზოთ საიმედო ტექნიკა. ჩვენი გამოცდილება და პროფესიონალური მიდგომა გარანტიას იძლევა, რომ ყოველი <br/>
შეძენა იქნება წარმატებული და კომფორტული.
</p>

    <hr className="w-1/2 mx-auto mt-25 self-center horizontalLineInDiv"/>

<div id="vacancies" className="flex flex-col !mt-25 vacanciesDiv " >
<div className="flex flex-row items-center cursor-pointer" onClick={() => {setIsVacanciesOpen(!isVacanciesOpen)}}> 
  <h2> ვაკანსიები</h2>
  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ transform: `rotate(${isVacanciesOpen ? 270 : 90}deg)`,     transition: "transform 0.7s ease-in-out", // duration + easing
 }}
                    width="1em"
                    height="1em"
                    fill="none"
                    viewBox="0 0 7 15"
                    className="flex ml-auto"
                  >
                    <path
                      stroke="#292D32"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      stroke-width="1.7"
                      d="m.712 1.56 4.89 4.89a1.49 1.49 0 0 1 0 2.1l-4.89 4.89"
                    ></path>
                  </svg>
                  </div> 

  {isVacanciesOpen && (
    <div className="" >
    <hr className="w-1/2 mx-auto mt-[20px] self-center horizontalLineInDiv"/>
    <div className="mt-4 vacanciesContent fadeIn transition-transform duration-500 ease-in-out px-4">
      <br/>
<h3 className="mb-3">მოლარე/კონსულტანტი</h3>
<div className="">
<p>
ტექნიკის სახლი Cash EE აცხადებს ვაკანსიას მოლარე/კონსულტანტის პოზიციაზე. 
ჩვენ ვეძებთ პასუხისმგებელ და კომუნიკაბელურ ადამიანს, რომელიც შეძლებს მომხმარებლების სწრაფ და ეფექტურ მომსახურებას, 
მობილურების შეფასებას, iCloud-ის დაყენებას და სხვადასხვა სერვისის შეთავაზებას.
</p>
<br/>
<h4 className="mb-1">ძირითადი მოვალეობები:</h4>
<ul className="list-disc list-inside">
  <li>მომხმარებლების დახვედრა და მათთვის სწრაფი და ხარისხიანი მომსახურების გაწევა;</li>
  <li>მობილური ტელეფონებისა და სხვა ტექნიკის ღირებულების შეფასება;</li>
  <li>მომხმარებლისთვის iCloud-ის და სხვა საჭირო სერვისების დაყენება;</li>
  <li>სერვისული მომსახურების შეთავაზება და კონსულტაცია;</li>
  <li>გაყიდვების და მომსახურების პროცესში დახმარება;</li>
  <li>თანამშრომლობა გუნდთან მომხმარებლის გამოცდილების გაუმჯობესებისთვის;</li>
  <li>ფულადი ოპერაციების სიზუსტით შესრულება და სალაროს მართვა.</li>
</ul>
<br/>

</div>

</div></div>)}
  </div>

    </div>
    </div>

  </>

  );}
 