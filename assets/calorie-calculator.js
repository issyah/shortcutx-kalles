
var calorie_form_section = document.querySelector('.calorie-form-section');
var calorie_result_section = document.querySelector('.calorie-result-section');
var calorie_result_value = document.getElementById('calorie-result-value');
var calorie_85_value = document.getElementById('calorie-lose-value');
var loading = document.querySelector('#calorie-calculator-container .t4s-btn-loading__svg');

function clickCalculateCalorie(e){
  e.preventDefault();
  loading.classList.add('is--loading');
  var gender = document.querySelector('[name="gender"]:checked').value;
  var age    = document.querySelector('[name="age"]').value;
  var weight = document.querySelector('[name="weight"]').value;
  var height = document.querySelector('[name="height"]').value;
  var activity = document.querySelector('[name="activity"]:checked').value;
  // fake a delay 
  setTimeout(function(){
    var bmr = 0;
    var activity_factor = 0;
    switch (activity) {
      case 'sedentary':
        activity_factor = 1.2;
        break;
      case 'light':
        activity_factor = 1.375;
        break;
      case 'moderate': 
        activity_factor = 1.55;
        break;
      case 'active' : 
        activity_factor = 1.725;
        break;
      case 'extreme' : 
        activity_factor = 1.9;
      default:
        break;
    }
    console.log(gender);
    console.log(weight);
    console.log(age);
    console.log(height);
    console.log(bmr);
    // starting formula before activity level 
    if(gender === 'female'){
      bmr = 655.1  + (9.563 * parseFloat(weight)) + (1.850 * parseFloat(height)) - (4.676 * parseFloat(age));
    }else if (gender === 'male'){
      bmr = 66.5 + (13.75 * parseFloat(weight)) + (5.003 * parseFloat(height)) - (6.75 * parseFloat(age));
    }
    var final_calorie = bmr * activity_factor;
    console.log(final_calorie);
    if(final_calorie){
      console.log(calorie_form_section);
      calorie_form_section.classList.add('hidden');
      calorie_result_section.classList.remove('hidden');
      calorie_result_value.innerHTML =  numberWithCommas((final_calorie).toFixed(0));
  
      // lose weight by reducing bmr 85% 
      calorie_85_value.innerHTML = numberWithCommas((final_calorie * 0.85).toFixed(0));
    }
    loading.classList.remove('is--loading');
  }, 1000);
}

function resetCalculator(){
  calorie_form_section.classList.remove('hidden');
  calorie_result_section.classList.add('hidden');
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}