import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, Navigate } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import {
  useGetJobByIdQuery,
} from '../store/apiSlice'
const ShareJob = () => {
  return (
    <div class="bg-white flex flex-col gap-2 p-12 centre">
      <div class="modal-header">
        <h2 class="modal-title mt-0 font-bold text-white text-2xl  bg-[#f4a10c]  rounded-2xl p-2 ml-[-1rem] ">Email this job to a friend</h2>
      </div>
      <div class="modal-body">
        <div class="form mt-0">
          <form id="sendJob" name="sendJob" class="form-horizontal labels-left"
            action="/search/sendJob_action.cfm" method="post" novalidate="novalidate">
            <input type="hidden" name="JobCode" value="178572528" />
            <input type="hidden" name="FromScript" id="FromScript" value="0" />
            <div class="form-group row pt-8">
              <label for="ToAddress" class="col-lg-4 control-label label-required font-bold  text-orange-400"> Email Job To </label>
              <div class="col-lg-8">
                <input className="input input-bordered w-full max-w-xs" id="ToAddress" name="ToAddress"
                  type="text" value="" size="45" maxlength="75" />
                <small className="pl-4 font-bold" >Please enter a single email address</small>
              </div>
            </div>
            <div class="form-group row pt-4">
              <label for="FromAddress" class="col-lg-4 control-label label-required font-bold  text-orange-400"> Your Email </label>
              <div class="col-lg-8">
              <input className="input input-bordered w-full max-w-xs" id="FromAddress" name="FromAddress"
                  type="text" value="" size="45" maxlength="75" />
              </div>
            </div>
            <div class="form-group row pt-4">
              <label for="FromName" class="col-lg-4 control-label font-bold  text-orange-400"> Your Name </label>
              <div class="col-lg-8">
                <input className="input input-bordered w-full max-w-xs" id="FromName" name="FromName" type="text" value="" size="45"
                  maxlength="40" />
              </div>
            </div>
            <div class="form-group row pt-4">
              <label for="Message" class="col-lg-4 control-label font-bold  text-orange-400"> Message </label>
              <div class="col-lg-8">
                <textarea name="Message" id="Message" rows="5" className="input input-bordered w-full max-w-xs"></textarea>
              </div>
            </div>          
            <div class="modal-footer pt-4">
              <div class="row">
                <div class="col-lg-4 order-lg-1">
                  <div class="form-actions mt-0">
                    <button class="btn btn-yellow" type="submit" data-dismiss="modal">Send Email</button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
export default ShareJob
