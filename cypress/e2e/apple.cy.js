describe('Compra en la tienda Apple',function(){
    it('Compra Mac mini personalizado con chip M2 y Final Cut Pro',function(){
        cy.visit("https://www.apple.com/");
        cy.get('a[aria-label="Mac"]').click();
        cy.get('a.chapternav-link[href="/mac-mini/"]').click();
        cy.get('a.ac-ln-button[href="/us/shop/goto/buy_mac/mac_mini"]').click();
        cy.get('button[data-autom="proceed-null-better"]').click();
        cy.get('label#memory_z16l_065_cd1w_2_label').click();
        cy.get('label#hard_drivesolid_state_drive_z16l_065_cd21_2_label').click();
        cy.get('label#ethernet_adapter_z16l_065_cd24_2_label').click();
        cy.get('label[for="final cut pro_2"]').click();
        

    })
})