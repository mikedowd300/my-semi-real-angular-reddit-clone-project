(function () {
  'use strict'

  angular.module('app', ['angularMoment'])
    .component('myHeader', {
      templateUrl: 'header.html'
    })
    .component('formPoster', {
      controller: formPosterController,
      templateUrl: 'poster.html'
    })

    function formPosterController() {
      const vm = this;
      vm.stories=[];
      vm.toggle = false;

      vm.myToggle = function() {
        vm.toggle = !vm.toggle;
      }

      vm.postForm = function(event, storyPost) {
        vm.story.comments = [];
        vm.story.commentBool = false;
        vm.story.time = Date();
        console.log(vm.story.time );
        event.preventDefault();
        vm.story.voteCount = 0;
        vm.stories.push(vm.story);
        vm.story = {};
        storyPost.$setPristine();
        storyPost.$setUntouched();
        vm.myToggle();
      }

      vm.plural = function(count) {
          if(count === 1) {
            return 'comment';
          }
          return 'comments';
      }

      vm.downVote = function(count) {
        if(count > 0) {
          count--;
        }
        return count;
      }

      vm.submitComment = function(story, comment) {
        story.commentBool = false;
        story.comments.push(comment);
        vm.newComment = '';
      }

      vm.setFilter = function() {
        vm.filterName = '';
      }

    }
})();
