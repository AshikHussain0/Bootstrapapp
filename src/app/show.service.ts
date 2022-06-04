import {  Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShowService {


  constructor() { }
  getMldata(){
    return [{'ml':'Machine Learning is the field of study that gives computers the capability to learn with...' },
            {'cs':'Cyber security is a discipline that covers how to defend devices and services from ...'},
            {'cn':'An interconnection of multiple devices, also known as hosts, that are connected using...'},
            {'ds':'A data structure is a particular way of organizing data in a computer so that it can be...'},
            {'cc':'Cloud computing is on-demand access, via the internet, to computing resources, application...'},
            {'iot':'The Internet of Things (IoT) describes the network of physical objects,things that are...'},
            {'cpp':'C++ is a general-purpose programming language and is widely used nowadays for ...'},
            {'wd':'Well organized and easy to understand Web building tutorials with lots of examples of how...'}
  ]

  }
}
