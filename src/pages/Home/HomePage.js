import './HomePage.css'
import React from 'react'

const HomePage = () => {
  return (
    <div>
      <form action="" id="login-form" class="login-form">
                <fieldset>
                    <div class="form-element">
                        <label htmlFor="user-name" class="label text-label">Find a country:</label>
                        <input type="text" class="text-input" name="country" id="country-name" placeholder="Enter country name"/>
                    </div>
                    <div class="form-element">
                        <input type="submit" name="submit" id="submit-button" value="SEARCH"
                            class="button login-button"/>
                    </div>
                </fieldset>
            </form>
    </div>
  )
}

export default HomePage