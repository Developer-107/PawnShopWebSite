import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function About() {


  const { pathname, hash } = useLocation();

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

    

    </div>
    </div>

  </>

  );}
 