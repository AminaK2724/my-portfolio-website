// quotes.js

const quotes = [
  { text: "Today's accomplishments were yesterday's impossibilities.", author: 'Robert Schuller' },
  { text: 'Be weird. Your strangeness is your magic.', author: 'Parker Lewis' },
  { text: 'Do something today that your future self will thank you for.', author: 'Unknown' },
  {
    text: "Don't sit down and wait for the opportunities to come. Get up and make them.",
    author: 'Madam C. J. Walker',
  },
  { text: 'Each morning we are born again. What we do today is what matters most.', author: 'Buddha' },
  { text: 'The secret to happiness is freedom. And the secret to freedom is courage.', author: 'Thucydides' },
  { text: 'Launch and learn. Everything is progress.', author: 'Danielle LaPorte' },
  {
    text: 'I have learned over the years that when one’s mind is made up, this diminishes fear. Knowing what must be done does away with fear.',
    author: 'Rosa Parks',
  },
  { text: 'Change your thoughts and you change your world.', author: 'Norman Vincent Peale' },
  { text: 'We awaken in others the same attitude of mind we hold toward them.', author: 'Elbert Hubbard' },
  { text: 'Learn the rules like a pro, so you can break them like an artist.', author: 'Pablo Picasso' },
  {
    text: 'There is no duty we so much underrate as the duty of being happy. By being happy we sow anonymous benefits upon the world.',
    author: 'Robert Louis Stevenson',
  },
  {
    text: 'So many of our dreams at first seem impossible. Then they seem improbable. And then, when we summon the will, they soon become inevitable.',
    author: 'Christopher Reeve',
  },
  { text: 'Be a prisoner of the past or a pioneer of the future. The choice is yours.', author: 'Deepak Chopra' },
  { text: 'If we are facing in the right direction, all we have to do is keep on walking.', author: 'Unknown' },
  {
    text: 'The mind, once stretched by a new idea, never regains its original dimensions.',
    author: 'Oliver Wendell Holmes',
  },
  { text: 'Courage is like a muscle. We strengthen it by use.', author: 'Ruth Gordon' },
  { text: "It is not the load that breaks you down. It's the way you carry it.", author: 'Lou Holtz' },
  {
    text: 'The universe is full of magical things patiently waiting for our wits to grow sharper.',
    author: 'Eden Phillpotts',
  },
  { text: "If you don't like the road you're walking, start paving another one.", author: 'Dolly Parton' },
  {
    text: "An amateur practices until they can play it correctly, a professional practices until they can't play it incorrectly.",
    author: 'Unknown',
  },
  { text: 'Your big opportunity may be right where you are now.', author: 'Napoleon Hill' },
  {
    text: 'If one dream should fall and break into a thousand pieces, never be afraid to pick one of those pieces up and begin again.',
    author: 'Flavia Weedn',
  },
  { text: 'A person is but the product of their thoughts. What they think, they become.', author: 'Mahatma Gandhi' },
  {
    text: 'Don’t let mental blocks control you. Set yourself free. Confront your fear and turn the mental blocks into building blocks.',
    author: 'Dr Roopleen',
  },
  {
    text: "Dude, suckin' at something is the first step to being sorta good at something.",
    author: "Jake, 'Adventure Time'",
  },
  {
    text: 'There are no quick fixes. But, by taking action just a little bit every day, you will build up a powerful reservoir of confidence, self-esteem, and discipline.',
    author: 'Scott Allan',
  },
  { text: 'Don’t postpone joy until you have learned all of your lessons. Joy is your lesson.', author: 'Alan Cohen' },
  { text: 'Change is the end result of all true learning.', author: 'Leo Buscaglia' },
  { text: 'Fear leads to self-doubt which is the worst enemy of creativity.', author: 'David Ogilvy' },
  { text: 'Keep moving forward. One step at a time.', author: 'Unknown' },
  {
    text: 'When you show deep empathy toward others, their defensive energy goes down, and positive energy replaces it.',
    author: 'Stephen Covey',
  },
  { text: 'Sometimes good things fall apart so better things can fall together.', author: 'Marilyn Monroe' },
  {
    text: 'When you wake up in the morning you have two choices: go back to sleep, or wake up and chase those dreams.',
    author: 'Unknown',
  },
  { text: 'Incredible things can be done simply if we are committed to making them happen.', author: 'Sadhguru' },
  { text: 'Always walk through life as if you have something new to learn and you will.', author: 'Vernon Howard' },
  {
    text: 'Know well what leads you forward and what holds you back, and choose the path that leads you to wisdom.',
    author: 'Buddha',
  },
  { text: 'Give whatever you are doing and whoever you are with the gift of your attention.', author: 'Jim Rohn' },
  { text: 'Fall in love with the process and the results will follow.', author: 'Bradley Whitford' },
  { text: 'The walls we build around us to keep sadness out also keeps out the joy.', author: 'Jim Rohn' },
  { text: 'Stop beating yourself up. We are all a work in progress.', author: 'Unknown' },
  { text: 'The master has failed more times than the beginner has even tried.', author: 'Stephen McCranie' },
  { text: 'Tough times never last, but tough people do.', author: 'Robert H. Schuller' },
  { text: "Take care of your body. It's the only place you have to live.", author: 'Jim Rohn' },
  { text: 'Empty your cup so that it may be filled; become devoid to gain totality.', author: 'Bruce Lee' },
  {
    text: 'A weakness when understood can become a strength, but the overextension of a strength can become a weakness.',
    author: 'Unknown',
  },
  {
    text: 'Continuous effort, not strength or intelligence, is the key to unlocking our potential.',
    author: 'Liane Cordes',
  },
  { text: 'The future belongs to those who believe in the beauty of their dreams.', author: 'Eleanor Roosevelt' },
  {
    text: "Courage doesn't always roar. Sometimes courage is the quiet voice at the end of the day whispering, 'I will try again tomorrow.'",
    author: 'Mary Anne Radmacher',
  },
  {
    text: 'Much of the best work of the world has been done against seeming impossibilities.',
    author: 'Dale Carnegie',
  },
  { text: 'We are what we repeatedly do. Excellence then, is not an act, but a habit.', author: 'Will Durant' },
  { text: 'Nothing is so fatiguing as the eternal hanging on of an uncompleted task.', author: 'William James' },
  { text: "You don't have to live your life the way other people expect you to.", author: 'Chris Guillebeau' },
  {
    text: 'Everything that irritates us about others can lead us to an understanding of ourselves.',
    author: 'Carl Jung',
  },
  { text: 'Life has no limitations, except the ones you make.', author: 'Les Brown' },
  { text: 'One small positive thought can change your whole day.', author: 'Unknown' },
  {
    text: 'The only way of finding the limits of the possible is by going beyond them into the impossible.',
    author: 'Arthur C. Clarke',
  },
  {
    text: 'If you want to be happy, set a goal that commands your thoughts, liberates your energy, and inspires your hopes.',
    author: 'Andrew Carnegie',
  },
  { text: 'Be brave. Take risks. Nothing can substitute experience.', author: 'Paulo Coelho' },
  { text: 'What a person can be, they must be.', author: 'Abraham Maslow' },
  { text: 'Deciding what not to do is as important as deciding what to do.', author: 'Steve Jobs' },
  { text: 'The past is done. The future has plenty of room for change.', author: 'Anonymous' },
  { text: 'Replace fear of the unknown with curiosity.', author: 'Unknown' },
  {
    text: 'To understand and be understood, those are among life’s greatest gifts, and every interaction is an opportunity to exchange them.',
    author: 'Maria Popova',
  },
  { text: "Always focus on how far you've come, not how far you have to go.", author: 'Anonymous' },
  {
    text: 'People do not decide their futures, they decide their habits and their habits decide their futures.',
    author: 'F. Matthias Alexander',
  },
  { text: "It's not what happens to you, but how you react to it that matters.", author: 'Epictetus' },
  { text: 'There’s power in looking silly and not caring that you do.', author: 'Amy Poehler' },
  { text: 'The only person you are destined to become is the person you decide to be.', author: 'Ralph Waldo Emerson' },
  { text: 'Argue for your limitations, and surely they’re yours.', author: 'Richard Bach' },
  { text: 'Do what you can, with what you have, where you are.', author: 'Theodore Roosevelt' },
  { text: 'Dream big dreams. Small dreams have no magic.', author: 'Dottie Boreyko' },
  { text: 'Trust yourself. You know more than you think you do.', author: 'Benjamin Spock' },
  { text: "Don't allow your rituals to become ruts.", author: 'Todd Henry' },
  { text: 'Curiosity Is the engine of achievement.', author: 'Sir Ken Robinson' },
  { text: 'The privilege of a lifetime is being who you are.', author: 'Joseph Campbell' },
]

export default quotes
