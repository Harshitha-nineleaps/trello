///<reference types ="Cypress"/>
///<reference types ="@cypress/xpath"/>
describe('add a board', () => {
    let id;
    let key="d63b9fac587ffa1f8ffa93b5bfb9b4f1";
    let token="ATTA67e79e407666d04a4799f5f1f3f6c57f9902a8a2c4e0c0d1ffaf135d78b099db3AF20EB3";
    it('add', () => {
        cy.request({
            method: "POST",
            url: "https://api.trello.com/1/boards/?&key="+key+"&token="+token,
            body: {
                "name": "harshi"
            },
        }).then((response) => {
            expect(response.status).to.eql(200);
            let body= JSON.parse(JSON.stringify(response.body))
            id=body.id
        })
    });
    it('update', () => {
        cy.request({
            method :"PUT",
            url :"https://api.trello.com/1/boards/"+id+"?key="+key+"&token="+token,
            body :{
               "name":"updated name" ,
               "id":id
            }
            
        }).then((response)=>{
            expect(response.status).to.eql(200);
            let body= JSON.parse(JSON.stringify(response.body))
           cy.log(body)})

    });
  it('get', () => {
            cy.request({
              method : "GET",
              url : "https://api.trello.com/1/boards/"+id+"?key="+key+"&token="+token,
          
    }).then((response)=>{
        expect(response.status).to.eql(200);
        let body= JSON.parse(JSON.stringify(response.body))
       cy.log(body)
})

});
it('delete', () => {
    cy.request({
        method :"DELETE",
        url :"https://api.trello.com/1/boards/"+id+"?key="+key+"&token="+token,
        
    }).then((response)=>{
        expect(response.status).to.eql(200);
        let body= JSON.parse(JSON.stringify(response.body))
       cy.log(body)

    })
});
});