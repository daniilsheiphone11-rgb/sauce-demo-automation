describe("API Tests", () => {
  it("GET posts", () => {

    cy.request({
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/posts"
    }).then((response) => {

      expect(response.status).to.eq(200);

    });

  });

});
 
  it("GET posts by userId", () => {
  cy.request({
    method: "GET",
    url: "https://jsonplaceholder.typicode.com/posts",
    qs: {
      userId: 1
    }
  }).then((response) => {

    expect(response.status).to.eq(200);
    expect(response.body).to.not.be.empty;

  });
});

it("GET Status", () => {

  cy.request({
    method: "GET",
    url: "https://jsonplaceholder.typicode.com/posts/1"

  }).then((response) => {

    
    expect(response.status).to.eq(200);
    expect(response.body.id).to.eq(1);
    expect(response.body.userId).to.eq(1);
    expect(response.body.title).to.not.be.empty;
    expect(response.body.body).to.not.be.empty;
   
  });
});

it("POST create post", () => {

  cy.request({
    method: "POST",
    url: "https://jsonplaceholder.typicode.com/posts",
    body: {
      title: "Cypress API Test",
      body: "My API automation test",
      userId: 1
    }
  }).then((response) => {

    expect(response.status).to.eq(201);

    expect(response.body.title)
      .to.eq("Cypress API Test");

    expect(response.body.userId)
      .to.eq(1);

  });
});

it("DELETE post", () => {

  cy.request({
    method: "DELETE",
    url: "https://jsonplaceholder.typicode.com/posts/1"
  }).then((response) => {

    expect(response.status).to.eq(200);

  });

});