// функция, возвращающая следующий элемент массива

Array.prototype.next = function () {
  if(Array.isArray(this) && !this.firstInterationPass){
      this.currentElement = -1;
      this.firstInterationPass = true;
  }
  this.currentElement+=1;
  if(this.currentElement>=this.length) this.currentElement=0;
  return this[this.currentElement];
};

import "@partials/index/hero";
import "@partials/index/uniq";
import "@partials/index/advantages";
import "@partials/index/contact";