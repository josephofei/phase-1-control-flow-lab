function scuberGreetingForFeet(sample) {
  // Write your code here!

  if (sample <= 400) {
    return `This one is on me!`
  }
  else if (sample > 400 && sample < 2000) {
    return `That will be twenty bucks.`
  }
  else if (sample > 2000 && sample < 2500) {
    return `I will gladly take your thirty bucks.`
  }
  else if (sample > 2500) {
    return 'No can do.';
  }

}

function ternaryCheckCity(city) {
  // Write your code here!

  const cityName = city === 'NYC' ? 'Ok, sounds good.' : 'No go.'

  return cityName;
}

function switchOnCharmFromTip(tip) {
  // Write your code here!
  switch (tip) {
    case 'generous':
      return `Thank you so much.`;
      break;
    case 'not as generous':
      return `Thank you.`;
      break;
    default:
      return `Bye.`

  }



}