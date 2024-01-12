export default async function() {

  console.log('NEWRELIC in module');
  await import('newrelic')
}
