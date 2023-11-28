const{ Builder, By}  = require ("selenium-webdriver")
const { describe, it}  = require ("mocha")
const should = require ("chai").should()

describe ("teste de login", function(){
    it("CT01- Login valido", async function(){{
        //construir uma pg no navegador
            let driver= await new Builder().forBrowser("firefox").build()
        //abrir o site
            await driver.get("https://www.saucedemo.com/") 
        //esperar
            await driver.sleep(300)
        //campo do usuario
            await driver.findElement(By.id("user-name")).sendKeys("standard_user")
         //esperar
             await driver.sleep(300)
         //campo da senha
            await driver.findElement(By.id("password")).sendKeys("secret_sauce")
        //esperar
            await driver.sleep(300)
        //botao login
          let elementbotao =  await driver.findElement(By.xpath("/html/body/div/div/div[2]/div[1]/div/div/form/input"))
          await elementbotao.click(By.id("login-button"))
        //sair
        await driver.quit()
    }})
    it("CT02- Username invalido ", async function(){{
        //construir uma pg no navegador
            let driver= await new Builder().forBrowser("firefox").build()
        //abrir o site
            await driver.get("https://www.saucedemo.com/") 
        //esperar
            await driver.sleep(300)
        //campo do usuario
            await driver.findElement(By.id("user-name")).sendKeys("user_standard")
         //esperar
             await driver.sleep(300)
         //campo da senha
            await driver.findElement(By.id("password")).sendKeys("secret_sauce")
        //esperar
            await driver.sleep(300)
        //botao login
          let elementbotao =  await driver.findElement(By.xpath("/html/body/div/div/div[2]/div[1]/div/div/form/input"))
          await elementbotao.click(By.id("login-button"))
          //assertion
          let erro2 = await driver.findElement(By.xpath("/html/body/div/div/div[2]/div[1]/div/div/form/div[3]/h3")).getText()
          erro2.should.equal("Epic sadface: Username and password do not match any user in this service")
        //sair
        await driver.quit()
    }})
    it("CT03- Password invalida ", async function(){{
        //construir uma pg no navegador
            let driver= await new Builder().forBrowser("firefox").build()
        //abrir o site
            await driver.get("https://www.saucedemo.com/") 
        //esperar
            await driver.sleep(300)
        //campo do usuario
            await driver.findElement(By.id("user-name")).sendKeys("standard_user")
         //esperar
             await driver.sleep(300)
         //campo da senha
            await driver.findElement(By.id("password")).sendKeys("secret_saucy")
        //esperar
            await driver.sleep(300)
        //botao login
          let elementbotao =  await driver.findElement(By.xpath("/html/body/div/div/div[2]/div[1]/div/div/form/input"))
          await elementbotao.click(By.id("login-button"))
          //ASSERTION
          let erro3 = await driver.findElement(By.xpath("/html/body/div/div/div[2]/div[1]/div/div/form/div[3]/h3")).getText()
          erro3.should.equal("Epic sadface: Username and password do not match any user in this service")
        //sair
        await driver.quit()
    }})
    it("CT04- User valido com letra maiuscula ", async function(){{
        //construir uma pg no navegador
            let driver= await new Builder().forBrowser("firefox").build()
        //abrir o site
            await driver.get("https://www.saucedemo.com/") 
        //esperar
            await driver.sleep(300)
        //campo do usuario
            await driver.findElement(By.id("user-name")).sendKeys("STANDARD_USER")
         //esperar
             await driver.sleep(300)
         //campo da senha
            await driver.findElement(By.id("password")).sendKeys("secret_sauce")
        //esperar
            await driver.sleep(300)
        //botao login
          let elementbotao =  await driver.findElement(By.xpath("/html/body/div/div/div[2]/div[1]/div/div/form/input"))
          await elementbotao.click(By.id("login-button"))
          //ASSERTION
          let erro4 = await driver.findElement(By.xpath("/html/body/div/div/div[2]/div[1]/div/div/form/div[3]/h3")).getText()
          erro4.should.equal("Epic sadface: Username and password do not match any user in this service")
        //sair
        await driver.quit()
    }})
    it("CT05- Login com Username válido e Password válida, em campos trocados ", async function(){{
        //construir uma pg no navegador
            let driver= await new Builder().forBrowser("firefox").build()
        //abrir o site
            await driver.get("https://www.saucedemo.com/") 
        //esperar
            await driver.sleep(300)
        //campo do usuario
            await driver.findElement(By.id("user-name")).sendKeys("secret_sauce")
         //esperar
             await driver.sleep(300)
         //campo da senha
            await driver.findElement(By.id("password")).sendKeys("standard_user")
        //esperar
            await driver.sleep(300)
        //botao login
          let elementbotao =  await driver.findElement(By.xpath("/html/body/div/div/div[2]/div[1]/div/div/form/input"))
          await elementbotao.click(By.id("login-button"))
          //ASSERTION
          let erro5 = await driver.findElement(By.xpath("/html/body/div/div/div[2]/div[1]/div/div/form/div[3]/h3")).getText()
          erro5.should.equal("Epic sadface: Username and password do not match any user in this service")
        //sair
        await driver.quit()
    }})
    it("CT06- Login com Username vazio ", async function(){{
        //construir uma pg no navegador
            let driver= await new Builder().forBrowser("firefox").build()
        //abrir o site
            await driver.get("https://www.saucedemo.com/") 
        //esperar
            await driver.sleep(300)
        //campo do usuario
            await driver.findElement(By.id("user-name")).sendKeys("")
         //esperar
             await driver.sleep(300)
         //campo da senha
            await driver.findElement(By.id("password")).sendKeys("secret_sauce")
        //esperar
            await driver.sleep(300)
        //botao login
          let elementbotao =  await driver.findElement(By.xpath("/html/body/div/div/div[2]/div[1]/div/div/form/input"))
          await elementbotao.click(By.id("login-button"))
          //ASSERTION
          let erro6 = await driver.findElement(By.xpath("/html/body/div/div/div[2]/div[1]/div/div/form/div[3]/h3")).getText()
          erro6.should.equal("Epic sadface: Username is required")
        //sair
        await driver.quit()
    }})
    it("CT07- Login com Password vazia", async function(){{
        //construir uma pg no navegador
            let driver= await new Builder().forBrowser("firefox").build()
        //abrir o site
            await driver.get("https://www.saucedemo.com/") 
        //esperar
            await driver.sleep(300)
        //campo do usuario
            await driver.findElement(By.id("user-name")).sendKeys("standard_user")
         //esperar
             await driver.sleep(300)
         //campo da senha
            await driver.findElement(By.id("password")).sendKeys("")
        //esperar
            await driver.sleep(300)
        //botao login
          let elementbotao =  await driver.findElement(By.xpath("/html/body/div/div/div[2]/div[1]/div/div/form/input"))
          await elementbotao.click(By.id("login-button"))
          //ASSERTION
          let erro7 = await driver.findElement(By.xpath("/html/body/div/div/div[2]/div[1]/div/div/form/div[3]/h3")).getText()
          erro7.should.equal("Epic sadface: Password is required")
        //sair
        await driver.quit()
    }})
    it("CT08- Login com ambos os campos vazios", async function(){{
        //construir uma pg no navegador
            let driver= await new Builder().forBrowser("firefox").build()
        //abrir o site
            await driver.get("https://www.saucedemo.com/") 
        //esperar
            await driver.sleep(300)
        //campo do usuario
            await driver.findElement(By.id("user-name")).sendKeys("")
         //esperar
             await driver.sleep(300)
         //campo da senha
            await driver.findElement(By.id("password")).sendKeys("")
        //esperar
            await driver.sleep(300)
        //botao login
          let elementbotao =  await driver.findElement(By.xpath("/html/body/div/div/div[2]/div[1]/div/div/form/input"))
          await elementbotao.click(By.id("login-button"))
          //ASSERTION
          let erro8 = await driver.findElement(By.xpath("/html/body/div/div/div[2]/div[1]/div/div/form/div[3]/h3")).getText()
          erro8.should.equal("Epic sadface: Username is required")
        //sair
        await driver.quit()
    }})
    it("CT09- Login com espaço antes/depois do Username", async function(){{
        //construir uma pg no navegador
            let driver= await new Builder().forBrowser("firefox").build()
        //abrir o site
            await driver.get("https://www.saucedemo.com/") 
        //esperar
            await driver.sleep(300)
        //campo do usuario
            await driver.findElement(By.id("user-name")).sendKeys(" standard_user ")
         //esperar
             await driver.sleep(300)
         //campo da senha
            await driver.findElement(By.id("password")).sendKeys("secret_sauce")
        //esperar
            await driver.sleep(300)
        //botao login
          let elementbotao =  await driver.findElement(By.xpath("/html/body/div/div/div[2]/div[1]/div/div/form/input"))
          await elementbotao.click(By.id("login-button"))
          //ASSERTION
          let erro9 = await driver.findElement(By.xpath("/html/body/div/div/div[2]/div[1]/div/div/form/div[3]/h3")).getText()
          erro9.should.equal("Epic sadface: Username and password do not match any user in this service")
        //sair
        await driver.quit()
    }})
    it("CT10- Login com Password válida, porém com letras maiusculas ", async function(){{
        //construir uma pg no navegador
            let driver= await new Builder().forBrowser("firefox").build()
        //abrir o site
            await driver.get("https://www.saucedemo.com/") 
        //esperar
            await driver.sleep(300)
        //campo do usuario
            await driver.findElement(By.id("user-name")).sendKeys("standard_user")
         //esperar
             await driver.sleep(300)
         //campo da senha
            await driver.findElement(By.id("password")).sendKeys("SECRET_SAUCE")
        //esperar
            await driver.sleep(300)
        //botao login
          let elementbotao =  await driver.findElement(By.xpath("/html/body/div/div/div[2]/div[1]/div/div/form/input"))
          await elementbotao.click(By.id("login-button"))
          //ASSERTION
          let erro10 = await driver.findElement(By.xpath("/html/body/div/div/div[2]/div[1]/div/div/form/div[3]/h3")).getText()
          erro10.should.equal("Epic sadface: Username and password do not match any user in this service")
        //sair
        await driver.quit()
    }})
})