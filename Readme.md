json 2 case class
=================

Kickstart your scala API client by turning JSON into case classes.

Try it at <http://json2caseclass.cleverapps.io>

## Use cases

When interacting with 3rd party json-based APIs from scala, modelling the API's responses with case classes
can come in handy.
If the JSON exhibits some properties (homogenous lists, for instance), it's easy to create a case class with
the same structure. With some deserialization magic it's easier to deal with the API's responses.

    case class Foo(a: Bar, b: Bar, c: Double)
    case class Bar(a: Option[String], b: String)
    
    {
       "a": {
         "a": "fubar",
         "b": "fubar"
       },
       "b": {
         "b": "baz"
       },
       "c": 42.0
    }

However it's tedious to manually copy the json structure into case classes.

json 2 case class automatically generates case classes from JSON (if possible).

## Features

json 2 case class can generate

 - nested case classes from JSON objects
 - lists from JSON arrays
 - scala base types from JSON primitives
 - Option[T] for optional values

## ToDo

Due to the arity limitation of 22 values, some JSON objects can't be encoded with case classes.
A Map[String,T] fallback is on the works.

The code is on the project but not activated : need a UI support to choose between map and object
