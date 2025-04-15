'use client'
export function EditForm(){
  return (
    <div>
        <form>
            <label htmlFor="id">Song ID: </label>&nbsp;
            <input type="text" name="id" id="id" /> <br/>
            <label htmlFor="name">Song Name:</label>&nbsp;
            <input type="text" name="name" id="name" /> <br/>
            <label htmlFor="length">Length:</label>&nbsp;
            <input type="number" step="0.01" name="length" id="length" /> <br/> 
            <label htmlFor="genre">Genre:</label>&nbsp;
            <input type="text" name="genre" id="genre" /> <br/> 
            <label htmlFor="releasedate">Release Date:</label>&nbsp;
            <input type="number" name="releasedate" id="releasedate" /> <br/> 
            <input type="submit" value="Create Song" />
        </form>
    </div>
  )
}
