/**
 * use of the useState hook in react
 * useState hooks can only be used in functional components because class components have their own way to do things
 * like hooks do in functional components
 * we cant use hooks inside functions, if statements, loops, cannot be nested inside of anything
 * and always called in the exact order
 * always remember that a usestate is a function
 * the usestate hook always returns an array of two elements and move hand in hand with destructuring
 * usestate helps store and update local state in a clean functiona way
 * usestate hooks help functional components have the state functionality that originally belongged to the
 * class components only
 *
 */

function useState(me) {
  let y = (me) => me;
  return [me, y];
}

const [me, y] = useState("sharif");
