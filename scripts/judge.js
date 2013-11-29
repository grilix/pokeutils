requirejs.config({
    baseUrl: 'scripts'
});

  require(['views/stats-form', 'views/stats-results'],
    function (StatsForm, StatsResults) {

    var statsResults = new StatsResults(document.querySelector('table.stats-results'));
    var form = document.querySelector('.judge-stats');
    var statsForm = new StatsForm(form);

    form.addEventListener('statsavailable', function (event) {
      statsResults.addResults(event.detail);
    });

    document.querySelector(
      '.judge-stats .mark'
    ).addEventListener('click', function (event) {
      statsResults.addMark();
    }, false);
  });
