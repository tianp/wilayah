var chai = require("chai"),
  expect = chai.expect,
  validator = require('validator'),
  data = require('./../wilayah.json')

describe( "wilayah", function() {

  it( "Should have valid JSON schema", function( done ) {
    
    expect( validator.isJSON( JSON.stringify( data ) ) ).to.equal( true )

    done()

  })


})
