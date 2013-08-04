module ApplicationHelper
	def full_title(title)
      starttext = "This is the "
	  endtext = " Page"
	  if title.empty?
	    starttext + "Sample App" + endtext
	  else
	    starttext + title + endtext	 
	  end

	end
end
